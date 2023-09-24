import style from "./skills.module.css";

export function Skills() {
  return (
    <div className={style.skills}>
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
            <CardLogo imageLogo={logoStyledComponents} nameLogo="StyledComp" />
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
  );
}
