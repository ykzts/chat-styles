import localForage from 'localforage'
import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState
} from 'react'

export interface ChatOutlineStyle {
  color: string
  width: number
}

export interface ChatTextStyle {
  color: string
  fontSize: number
  outline: ChatOutlineStyle
  show?: boolean
}

export interface ChatImageStyle {
  show: boolean
  size: number
}

export interface ChatStyles {
  authorName: ChatTextStyle
  avatar: ChatImageStyle
  engagementMessage: {
    show: boolean
  }
  memberName: ChatTextStyle & {
    badge: ChatImageStyle
  }
  message: ChatTextStyle
  moderatorName: ChatTextStyle & {
    badge: ChatImageStyle
  }
  newMemberBackground: {
    show: boolean
  }
  ownerName: ChatTextStyle
  superChatBackground: {
    show: boolean
  }
  timestamp: ChatTextStyle
}

export interface ChatStylesState {
  chatStyles: ChatStyles
  setChatStyles: (chatStyles: ChatStyles) => void
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

const ChatStylesContext = React.createContext<ChatStylesState>({
  chatStyles: defaultChatStyles,
  setChatStyles: () => {}
})

export default ChatStylesContext

const ChatStylesProvider: FunctionComponent = ({
  children
}): ReactElement | null => {
  const [chatStyles, setChatStyles] = useState<ChatStyles | null>(null)

  useEffect(() => {
    localForage.getItem<ChatStyles>('chatStyles:v2').then(chatStyles => {
      setChatStyles(chatStyles || defaultChatStyles)
    })
  }, [])

  if (!chatStyles) return null

  return (
    <ChatStylesContext.Provider
      value={{
        chatStyles,
        setChatStyles: chatStyles => {
          localForage
            .setItem<ChatStyles>('chatStyles:v2', chatStyles)
            .then(newChatStyles => {
              setChatStyles(newChatStyles)
            })
        }
      }}
    >
      {children}
    </ChatStylesContext.Provider>
  )
}

export { ChatStylesProvider }
