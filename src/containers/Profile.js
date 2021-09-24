import ButtonAppBar from "../componenets/mui-componenets/ButtonAppBar";
import MiniDrawer from '../componenets/mui-componenets/MiniDrawer'

import './style.css'
function Profile(){
    return(
        <>
<ButtonAppBar title='Profile' sideTitle='Signup' page1='/profile' page2='/signup'/>
<MiniDrawer/>

        </>
    );
}


export default Profile;