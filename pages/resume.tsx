import Footer from "./components/resume-page/footer";
import Header from "./components/resume-page/header";
import MainContent from "./components/resume-page/main";


function Resume() {
    return (
        <>
            <a className={"btn download-link"} href={""}>Download PDF</a>
            <Header />
            <MainContent />
            <Footer />
        </>

    )
}

export default Resume;