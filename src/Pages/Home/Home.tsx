import { useTranslation } from "react-i18next";


const Home = () => {

    const {t} = useTranslation();

    return (
        <div>
            <span>{t("homePage")}</span>
        </div>
    )
}

export default Home;