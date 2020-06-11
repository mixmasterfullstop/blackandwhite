import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
const theme = createMuiTheme(
    {
        palette:{
            primary:{
                main:"#212121",
            },
            secondary:{
                main:"#e0e0e0"
            },

            
        },
        status: {
            danger: "purple"
        }
    }
)
export default theme;