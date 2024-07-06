import React, {ReactNode} from 'react';
import Link from 'next/link';
import './index.css'

interface LayoutProps {
  children: ReactNode;
}


export default function RootLayout({children} : LayoutProps){
  return(
    <html>
      <body>
          <div id = "header">
            <div id="headerImage">
              <div id="headerImage">
                 <div id="headerImage">
                <img src="./Images/pics/HeaderIMG.jpg" alt="HeaderIMG" id="topImg"></img>
            </div>
            </div>
            </div>
            <div>
                <h1 id="name"><Link href="./BioContent" className="topLink">Ivan</Link></h1>
                <header>
                    <nav id="nav_text">
                        <Link href="./PhotosContent" passHref className="baseLink" id="photos">Photos</Link>
                        <Link href="./PortfolioContent" className="baseLink" id="portfolio">Portfolio</Link>
                    </nav>
                </header>
                <h2 id="surname"><Link href="./BioContent" className="topLink">Vasilev</Link></h2>
            </div>
        </div>

        <main>
            {children}
        </main>

        <footer>
            <div id="links">
                <div className="link" id="tg">
                    <Link href="https://t.me/Worried_Seat"><img src='../Images/logos/telegram-logo-black-and-white.png' className="footerImage" alt="tg"></img></Link>
                </div>
                <div className="link" id="github">
                    <Link href="https://github.com/WorriedSeat"><img src="../Images/logos/github-mark.png" className="footerImage" alt="git"></img></Link>
                </div>
                <div className="link" id="email">
                    <Link href= "mailto:vanish_for.white@mail.ru"><img src="../Images/logos/email-logo.png" className="footerImage" alt="emails"></img></Link>
                </div>
            </div>
        </footer>
      </body>
    </html>
  )
}