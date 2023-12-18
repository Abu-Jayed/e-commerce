'use client'
import { usePathname } from 'next/navigation'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import classes from './index.module.scss'
import Image from 'next/image'

const FooterComponent = () => {
  const pathname = usePathname()
  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ' '}>
      <Gutter>
        <ul className={classes.inclusions}>{inclusions.map((inclusion,index)=> (
          <li key={index}>
            <Image src={inclusion.icon} alt={inclusion.title} height={36} width={36} className={classes.icon}></Image>
            <h5 className={classes.title}>{inclusion.title}</h5>
            <p>{inclusion.description}</p>
          </li>
        ))}</ul>
      </Gutter>
    </footer>
  )
}

export default FooterComponent
