import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


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

// POST.JS
const postsDirectory = path.join(process.cwd(), 'blogposts')

function getSortedPostsData() {
    console.log('getSortedPostsData HAS BEEN HIT MON')
    console.log("🚀 ~ file: index.js ~ line 22 ~ postsDirectory", postsDirectory)
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

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    ...matterResult.data
  }
}

export {
    ensureString,
    ensureNumeric,
    ensureArray,
    ensureObject,
    getSortedPostsData,
    getAllPostIds,
    getPostData
}