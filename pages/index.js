import Head from 'next/head'
import Image from 'next/image'
import classes from "../styles/Home.module.css"
import girl_img from "/public/images/girl.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Turn Your Website Into Your Best Sales Person</title>
        <meta name="description" content="Triple your sales with a pixel-perfect website. At SmartSite Studio, we don’t just design and write code, we build a revenue-driving machine for your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> 
        <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <main className={classes.main}>
        <div className={classes.circle1}/>
        <div className={classes.circle2}/>
        <div className={classes.content}>
          <div className={classes.imgContainer}>
            <Image src={girl_img.src} fill alt="girl"/>
          </div>
          <h1>Turn Your Website Into Your Best Sales<br/>Person</h1>
          <div className={classes.info}>
            <p>Triple your sales with a pixel-perfect website. At SmartSite Studio, we don’t just design and write code, we build a revenue-driving machine for your business.</p>
            <div className={classes.actions}>
              <button className={classes.orangeBut}>Talk to Us</button>
              <button className={classes.portfolioBut}>See Portfolio</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
