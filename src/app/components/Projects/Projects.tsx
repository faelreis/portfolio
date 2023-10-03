import style from "./projects.module.css";
import caseNeon from "../../assets/cases/neon.jpg";
import caseCalculator from "../../assets/cases/calculator.jpg";
import caseWeather from "../../assets/cases/weather.jpg";
import caseVaultflow from "../../assets/cases/vaulflow.jpg";
import caseRickMorty from "../../assets/cases/rickmorty.jpg";
import caseToDoList from "../../assets/cases/todolist.jpg";
import caseTimer from "../../assets/cases/timer.jpg";
import casePokemon from "../../assets/cases/pokemon.jpg";
import caseBlizzard from "../../assets/cases/blizzard.jpg";
import caseGitUser from "../../assets/cases/gituser.jpg";
import caseForm from "../../assets/cases/hookform.jpg";
import caseWhatif from "../../assets/cases/whatif.jpg";
import caseCrud from "../../assets/cases/crud.jpg";
import caseEcommerce from "../../assets/cases/ecommerce.jpg";
import { CardProject } from "./components/CardProject/CardProject";

export function Projects() {
  return (
    <section id="projects" className={style.projects}>
      <div className="container">
        <div className={style.wrapperProjects}>
          <div className={style.lProjects}>
            <h2 className={style.titleProjects}>Projetos</h2>
            <p className={style.textProjects}>
              Cada aplicação representa um desafio único de uma solução
            </p>
          </div>
          <div className={style.rProjects}>
            <div className={style.wrapperCardsProjects}>
              <CardProject
                imageCase={caseEcommerce}
                nameCase="E-commerce"
                nameTechs={["Next", "React", "Tailwind", "Sanity"]}
                linkCase="https://reis-ecommerce.vercel.app/"
                repCase="https://github.com/faelreis/ecommerce"
              />
              <CardProject
                imageCase={caseNeon}
                nameCase="Neon Website"
                nameTechs={["HTML", "SASS", "JavaScript", "Gulp"]}
                linkCase="https://neon-reis.netlify.app/"
                repCase="https://github.com/faelreis/lp-neon"
              />
              <CardProject
                imageCase={casePokemon}
                nameCase="Pokémon App"
                nameTechs={["HTML", "SASS", "JavaScript", "Gulp", "API"]}
                linkCase="https://reispokemon.netlify.app/"
                repCase="https://github.com/faelreis/pokemon"
              />
              <CardProject
                imageCase={caseBlizzard}
                nameCase="Blizzard Website"
                nameTechs={["HTML", "SASS", "JavaScript", "Gulp"]}
                linkCase="https://reis-blizzard.netlify.app/"
                repCase="https://github.com/faelreis/blizzard"
              />
              <CardProject
                imageCase={caseRickMorty}
                nameCase="Rick & Morty | Characters"
                nameTechs={["React", "Styled Components", "API"]}
                linkCase="https://rickandmortyapi-seven.vercel.app/"
                repCase="https://github.com/faelreis/rickandmortyapi"
              />
              <CardProject
                imageCase={caseWhatif}
                nameCase="Whatif | CMS Website"
                nameTechs={["Next", "React", "Tailwind", "Prismic"]}
                linkCase="https://whatif-zeta.vercel.app/"
                repCase="https://github.com/faelreis/whatif"
              />
              <CardProject
                imageCase={caseCrud}
                nameCase="CRUD FullStack"
                nameTechs={["React", "Node", "MySQL"]}
                linkCase="https://github.com/faelreis/crud-user"
                repCase="https://github.com/faelreis/crud-user"
              />
              <CardProject
                imageCase={caseWeather}
                nameCase="Weather App"
                nameTechs={["React", "CSS", "API"]}
                linkCase="https://reis-weather.vercel.app/"
                repCase="https://github.com/faelreis/weather/"
              />
              <CardProject
                imageCase={caseCalculator}
                nameCase="Calculator App"
                nameTechs={["HTML", "CSS", "JavaScript"]}
                linkCase="https://reiscalculator.netlify.app/"
                repCase="https://github.com/faelreis/calculator/"
              />
              <CardProject
                imageCase={caseVaultflow}
                nameCase="Vaulflow Website"
                nameTechs={["HTML", "SASS", "GULP"]}
                linkCase="https://reisvaultflow.netlify.app/"
                repCase="https://github.com/faelreis/lp-data"
              />
              <CardProject
                imageCase={caseToDoList}
                nameCase="To-Do List"
                nameTechs={["HTML", "CSS", "JavaScript"]}
                linkCase="https://reistodolist.netlify.app/"
                repCase="https://github.com/faelreis/todolist"
              />
              <CardProject
                imageCase={caseTimer}
                nameCase="Timer"
                nameTechs={["HTML", "CSS", "JavaScript"]}
                linkCase="https://reistimer.netlify.app/"
                repCase="https://github.com/faelreis/timer"
              />
              <CardProject
                imageCase={caseGitUser}
                nameCase="GitHub User App"
                nameTechs={["HTML", "CSS", "JavaScript", "API"]}
                linkCase="https://faelreis.github.io/api-github/"
                repCase="https://github.com/faelreis/api-github"
              />
              <CardProject
                imageCase={caseForm}
                nameCase="Form Validation"
                nameTechs={["React", "Hook Form", "CSS Modules"]}
                linkCase="https://faelreis.github.io/form/"
                repCase="https://github.com/faelreis/form"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
