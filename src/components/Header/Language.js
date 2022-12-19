import { NavDropdown } from 'react-bootstrap';
import { useTranslation, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';


const Language = (props) => {

    const { t, i18n } = useTranslation();
    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language)
        console.log(i18n.language)
    }

    return (
        <>
            <NavDropdown title={i18n.language === "vi" ? "Việt Nam" : " English"} id="basic-nav-dropdown2" className='languages'>
              <NavDropdown.Item onClick={() => handleChangeLanguage("en")}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleChangeLanguage("vi")}>Việt Nam</NavDropdown.Item>
            </NavDropdown>
        </>
    )
}
export default Language;