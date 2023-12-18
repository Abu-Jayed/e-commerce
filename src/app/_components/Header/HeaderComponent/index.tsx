import Link from 'next/link'
import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'

import classes from './index.module.scss'
import Image from 'next/image'
import { HeaderNav } from '../Nav'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <>
      <nav className={[classes.header]}>
        <Gutter className={classes.wrap}>
          <Link href={'/'}>
            <Image width={170} height={50} src="/logo-black.svg" alt="logo" />
          </Link>
          <HeaderNav header={header}></HeaderNav>
        </Gutter>
      </nav>
    </>
  )
}

export default HeaderComponent
