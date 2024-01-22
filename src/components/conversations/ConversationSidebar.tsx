import {ConversationSidebarStyle} from "../../utils/styles";
import {TbEdit} from 'react-icons/tb'

export const ConversationSidebar = () => {
    return (
        <ConversationSidebarStyle>
            <header>
                <h1>
                    conversations
                </h1>
                <TbEdit size={38}/>
            </header>
        </ConversationSidebarStyle>
    )
}