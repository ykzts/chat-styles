import localForage from 'localforage'
import {
  type FC,
  type ReactNode,
  createContext,
  useEffect,
  useState
} from 'react'
import ChatStyles from 'types/ChatStyles'

export type ChatStylesState = {
  chatStyles: ChatStyles
  setChatStyles?: (chatStyles: ChatStyles) => void
}

const defaultChatStyles: ChatStyles = {
  authorName: {
    color: '#ffffffff',
    fontSize: 18,
    outline: {
      color: '#000000ff',
      width: 2
    },
    show: true
  },
  avatar: {
    show: true,
    size: 20
  },
  engagementMessage: {
    show: false
  },
  memberName: {
    badge: {
      show: true,
      size: 16
    },
    color: '#107516ff',
    fontSize: 18,
    outline: {
      color: '#000000ff',
      width: 2
    },
    show: true
  },
  message: {
    color: '#ffffffff',
    fontSize: 18,
    outline: {
      color: '#000000ff',
      width: 2
    }
  },
  moderatorName: {
    badge: {
      show: true,
      size: 16
    },
    color: '#5e84f1ff',
    fontSize: 18,
    outline: {
      color: '#000000ff',
      width: 2
    },
    show: true
  },
  newMemberBackground: {
    show: true
  },
  ownerName: {
    color: '#ffd600ff',
    fontSize: 18,
    outline: {
      color: '#000000ff',
      width: 2
    },
    show: true
  },
  sticker: {
    color: '#ffffffff',
    fontSize: 18,
    outline: {
      color: '#000000ff',
      width: 2
    },
    show: true
  },
  superChatBackground: {
    show: true
  },
  timestamp: {
    color: '#999999ff',
    fontSize: 16,
    outline: {
      color: '#000000ff',
      width: 2
    },
    show: false
  }
}

const ChatStylesContext = createContext<ChatStylesState>({
  chatStyles: defaultChatStyles
})

export default ChatStylesContext

type Props = {
  children: ReactNode
}

const ChatStylesProvider: FC<Props> = ({ children }) => {
  const [chatStyles, setChatStyles] = useState<ChatStyles | null>(null)

  useEffect(() => {
    localForage
      .getItem<ChatStyles>('chatStyles:v2')
      .then((chatStyles) => {
        setChatStyles(chatStyles || defaultChatStyles)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  if (!chatStyles) return null

  return (
    <ChatStylesContext.Provider
      value={{
        chatStyles,
        setChatStyles: (chatStyles): void => {
          localForage
            .setItem<ChatStyles>('chatStyles:v2', chatStyles)
            .then((newChatStyles) => {
              setChatStyles(newChatStyles)
            })
            .catch((error) => {
              console.error(error)
            })
        }
      }}
    >
      {children}
    </ChatStylesContext.Provider>
  )
}

export { ChatStylesProvider }
