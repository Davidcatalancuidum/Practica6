import"./widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const Widget = ({ type }) =>{

    let data;

    const amount = 100;
    const diff = 20;

    switch(type){
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon:  <PersonOutlineOutlinedIcon className="icon" style={{color:"crimson", backgroundColor: "rgba(255,0,0,0.2)"}}/>,
            };
            break;
        case "order":
            data={
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon:  <ShoppingCartOutlinedIcon className="icon" style={{color:"goldenrod", backgroundColor: "rgba(218,165,32,0.2)"}}/>,
            };
            break;
        case "earning":
            data={
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon:  <MonetizationOnOutlinedIcon className="icon" style={{color:"green", backgroundColor: "rgba(0,128,0,0.2)"}}/>,
            };
            break;
        case "balance":
            data={
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon:  <AccountBalanceWalletOutlinedIcon className="icon" style={{color:"purple", backgroundColor: "rgba(128,0,128,0.2)"}}/>,
            };
            break;
        default:
            break;
        }

    return(
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{amount}{data.isMoney && "€"}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;