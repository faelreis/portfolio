import style from './footer.module.css'

export function Footer(){
    return(
        <footer className={style.footer}>
            <div className="container">
                <div className={style.wrapperFooter}>
                    <span className={style.textFooter}>© All rights reserved - Rafael Reis Franco</span>
                </div>
            </div>
        </footer>
    )
}