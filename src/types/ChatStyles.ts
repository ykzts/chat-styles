export type ChatOutlineStyle = {
  color: string
  width: number
}

export type ChatTextStyle = {
  color: string
  fontSize: number
  outline: ChatOutlineStyle
  show?: boolean
}

export type ChatImageStyle = {
  show: boolean
  size: number
}

type ChatStyles = {
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

export default ChatStyles
