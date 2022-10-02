import React from 'react'
import classes from './Layout.scss'

function Layout(props) {
  return (
    <>
        <div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </div>
    </>
  )
}

export default Layout