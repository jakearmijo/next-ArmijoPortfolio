import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


var ensureString = function ensureString(string) {
    return string ? "".concat(string) : '';
  }; 

var ensureNumeric = function ensureNumeric(string) {
return Number(ensureString(string).replace(/[^0-9.]/gi, ''));
};

var ensureArray = function ensureArray() {
var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
return !array ? [] : Array.isArray(array) ? array : [array];
};

var ensureObject = function ensureObject(object) {
return object || {};
};

//My custom image loader
const myImageLoader = ({ src, width, quality }) => {
  return `https://jakearmijo.com/${src}?w=${width}&q=${quality || 75}`
}

// POST.JS
const postsDirectory = path.join(process.cwd(), 'blogposts')

function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = ensureArray(fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  }))
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}

export {
    ensureString,
    ensureNumeric,
    ensureArray,
    ensureObject,
    myImageLoader,
    getSortedPostsData,
    getAllPostIds,
    getPostData
}