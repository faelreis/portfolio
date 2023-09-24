import style from "./skills.module.css";
import { CardLogo } from "./components/CardLogo";
import logoNext from "../../assets/logos/logo-next.svg";
import logoReact from "../../assets/logos//logo-react.svg";
import logoAngular from "../../assets/logos//logo-angular.svg";
import logoTypescript from "../../assets/logos/typescript.svg";
import logoNode from "../../assets/logos/nodejs.svg";
import logoJavaScript from "../../assets/logos/logo-js.svg";
import logoHTML from "../../assets/logos/logo-html.svg";
import logoCSS from "../../assets/logos/logo-css.svg";
import logoSass from "../../assets/logos/logo-scss.svg";
import logoTailwind from "../../assets/logos/tailwind.svg";
import logoStyledComponents from "../../assets/logos/styled-components.svg";
import logoGulp from "../../assets/logos/logo-gulp.svg";
import logoRedux from "../../assets/logos/logo-redux.svg";
import logoPrismic from "../../assets/logos/logo-prismic.svg";
import logoPrisma from "../../assets/logos/logo-prisma.svg";
import logoStitches from "../../assets/logos/stitches.svg";
import logoWordpress from "../../assets/logos/logo-wordpress.svg";
import logoWebflow from "../../assets/logos/logo-webflow.svg";
import logoGit from "../../assets/logos/git.svg";
import logoFigma from "../../assets/logos/logo-figma.svg";
import logoPhotoshop from "../../assets/logos/logo-photoshop.svg";
import logoAfterEffects from "../../assets/logos/logo-aftereffects.svg";
import logoMySql from "../../assets/logos/logo-mysql.svg";
import logoMongoDB from "../../assets/logos/logo-mongodb.svg";
import logoPython from "../../assets/logos/python.svg";
import logoBootstrap from "../../assets/logos/bootstrap.svg";
import logojQuery from "../../assets/logos/jquery.svg";
import logoWebpack from "../../assets/logos/webpack.svg";

export function Skills() {
  return (
    <div id="skills" className={style.skills}>
      <div className="container">
        <div className={style.wrapperSkills}>
          <div className={style.lSkills}>
            <h2 className={style.titleSkills}>Tecnologias</h2>
            <p className={style.textSkills}>
              Algumas das minhas principais ferramentas, frameworks e
              bibliotecas que utilizo
            </p>
          </div>
          <div className={style.rSkills}>
            <div className={style.wrapperCardsSkills}>
              <CardLogo imageLogo={logoReact} nameLogo="React" />
              <CardLogo imageLogo={logoAngular} nameLogo="Angular" />
              <CardLogo imageLogo={logoNext} nameLogo="Next" />
              <CardLogo imageLogo={logoJavaScript} nameLogo="JavaScript" />
              <CardLogo imageLogo={logoTypescript} nameLogo="TypeScript" />
              <CardLogo imageLogo={logojQuery} nameLogo="jQuery" />
              <CardLogo imageLogo={logoNode} nameLogo="Node" />
              <CardLogo imageLogo={logoRedux} nameLogo="Redux" />
              <CardLogo imageLogo={logoHTML} nameLogo="HTML" />
              <CardLogo imageLogo={logoCSS} nameLogo="CSS" />
              <CardLogo imageLogo={logoTailwind} nameLogo="Tailwind" />
              <CardLogo
                imageLogo={logoStyledComponents}
                nameLogo="StyledComp"
              />
              <CardLogo imageLogo={logoSass} nameLogo="SASS" />
              <CardLogo imageLogo={logoBootstrap} nameLogo="Bootstrap" />
              <CardLogo imageLogo={logoStitches} nameLogo="Stitches" />
              <CardLogo imageLogo={logoGulp} nameLogo="Gulp" />
              <CardLogo imageLogo={logoPrismic} nameLogo="Prismic" />
              <CardLogo imageLogo={logoPrisma} nameLogo="Prisma" />
              <CardLogo imageLogo={logoWebpack} nameLogo="Webpack" />
              <CardLogo imageLogo={logoGit} nameLogo="Git" />
              <CardLogo imageLogo={logoWordpress} nameLogo="WordPress" />
              <CardLogo imageLogo={logoWebflow} nameLogo="Webflow" />
              <CardLogo imageLogo={logoFigma} nameLogo="Figma" />
              <CardLogo imageLogo={logoPhotoshop} nameLogo="Photoshop" />
              <CardLogo imageLogo={logoAfterEffects} nameLogo="After Effects" />
              <CardLogo imageLogo={logoMySql} nameLogo="MySQL" />
              <CardLogo imageLogo={logoMongoDB} nameLogo="MongoDB" />
              <CardLogo imageLogo={logoPython} nameLogo="Python" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
