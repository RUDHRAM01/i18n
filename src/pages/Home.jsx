import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();

	return (
		<div className="container mt-5">
			<h1 className="text-center">{t("home")}</h1>
		</div>
	);
};

export default Home;
