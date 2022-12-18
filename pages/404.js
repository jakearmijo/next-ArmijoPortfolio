import { JakeMijLogo } from "../public/images";
import { myImageLoader } from "../lib/utils";

export default function Custom404() {
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
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
