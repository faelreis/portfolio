import style from "./cardtech.module.css";

export function CardTech({ nameTech }: { nameTech: React.ReactNode }) {
  return (
    <div className={style.boxNameTech}>
      <h4 className={style.nameTech}>{nameTech}</h4>
    </div>
  );
}
