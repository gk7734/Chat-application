import {Page} from "../utils/styles";
import {ConversationSidebar} from "../components/conversations/ConversationSidebar";
import {Outlet, useParams} from "react-router-dom";
import {ConversationPanel} from "../components/conversations/ConversationPanel";
import mockConversations from '../__mock__/conversation'

export const ConversationPage = () => {
    const { id } = useParams()

    return (
        <Page>
            <ConversationSidebar conversations={mockConversations} />
            {!id && <ConversationPanel />}
            <Outlet />
        </Page>
    )
}