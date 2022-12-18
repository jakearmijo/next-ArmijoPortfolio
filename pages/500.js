// pages/500.js
export default function Custom500() {
  return (
    <div className="main">
      <Head>
        <title>The Armijo Algorithm</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Image
        loader={myImageLoader}
        src={JakeMijLogo}
        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
        alt={name}
        width="800"
        height="600"
      />
      <h1>500 - Server-side error occurred</h1>
    </div>
  );
}
