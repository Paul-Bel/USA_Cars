import {Contacts} from "./Contacts/Contacts";
import {Documents} from "./Documents/Documents";
import {ContactClocks} from "./ContactClocks/ContactCloks";
import {CallBackPage} from "../firstPages/CallBackPage/CallBackPage";
import {Subscription} from "../firstPages/Subscription/Subscription";
import {Footer} from "../firstPages/Footer/Footer";


export const ContactPage = () => {

    return (
        <>
            <Contacts />
            <Documents />
            <ContactClocks/>
            <CallBackPage/>
            <Subscription/>
            <Footer/>
        </>
    )
}