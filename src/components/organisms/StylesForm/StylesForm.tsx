import { useForm } from '@tanstack/react-form'
import React, { FC, useCallback, useContext } from 'react'
import {
  UserCircle2,
  MessageSquare,
  User,
  Settings,
  Sticker
} from 'lucide-react'
import ChatStylesContext from 'context/ChatStylesContext'
import AutoSave from 'components/atoms/AutoSave'
import ColorPicker from 'components/atoms/ColorPicker'
import Headline from 'components/atoms/Headline'
import ChatStyles from 'types/ChatStyles'

const StylesForm: FC = () => {
  const { chatStyles, setChatStyles } = useContext(ChatStylesContext)

  const handleSubmit = useCallback(
    (values: ChatStyles) => {
      if (typeof setChatStyles === 'function') setChatStyles(values)
    },
    [setChatStyles]
  )

  const form = useForm({
    defaultValues: chatStyles,
    onSubmit: async ({ value }) => {
      handleSubmit(value)
    }
  })

  return (
    <form
      action="/"
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        void form.handleSubmit()
      }}
    >
      <section className="mb-8">
        <Headline icon={<UserCircle2 className="w-6 h-6" />}>アイコン</Headline>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div>
            <form.Field name="avatar.show">
              {(field) => (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!field.state.value}
                    id={field.name}
                    onChange={(e) => field.handleChange(e.target.checked)}
                    className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                  />
                  <span className="ml-2">表示する</span>
                </label>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="avatar.size">
              {(field) => {
                const avatarShow = form.getFieldValue('avatar.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      大きさ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                        disabled={!avatarShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <Headline icon={<User className="w-6 h-6" />}>名前</Headline>

        <h3 className="text-base font-normal mb-4">オーナー</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div>
            <form.Field name="ownerName.show">
              {(field) => (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!field.state.value}
                    id={field.name}
                    onChange={(e) => field.handleChange(e.target.checked)}
                    className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                  />
                  <span className="ml-2">表示する</span>
                </label>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="ownerName.fontSize">
              {(field) => {
                const ownerNameShow = form.getFieldValue('ownerName.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      大きさ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                        disabled={!ownerNameShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
          <div>
            <form.Field name="ownerName.color">
              {(field) => {
                const ownerNameShow = form.getFieldValue('ownerName.show')
                return (
                  <ColorPicker
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    disabled={!ownerNameShow}
                    value={field.state.value}
                  />
                )
              }}
            </form.Field>
          </div>
          <div>
            <h4 className="text-base font-medium">アウトライン</h4>
          </div>
          <div>
            <form.Field name="ownerName.outline.width">
              {(field) => {
                const ownerNameShow = form.getFieldValue('ownerName.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      太さ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        disabled={!ownerNameShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
          <div>
            <form.Field name="ownerName.outline.color">
              {(field) => {
                const ownerNameShow = form.getFieldValue('ownerName.show')
                return (
                  <ColorPicker
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    disabled={!ownerNameShow}
                    value={field.state.value}
                  />
                )
              }}
            </form.Field>
          </div>
        </div>

        <h3 className="text-base font-normal mb-4 mt-6">モデレーター</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div>
            <form.Field name="moderatorName.show">
              {(field) => (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!field.state.value}
                    id={field.name}
                    onChange={(e) => field.handleChange(e.target.checked)}
                    className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                  />
                  <span className="ml-2">表示する</span>
                </label>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="moderatorName.fontSize">
              {(field) => {
                const moderatorNameShow =
                  form.getFieldValue('moderatorName.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      大きさ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        disabled={!moderatorNameShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
          <div>
            <form.Field name="moderatorName.color">
              {(field) => {
                const moderatorNameShow =
                  form.getFieldValue('moderatorName.show')
                return (
                  <ColorPicker
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    disabled={!moderatorNameShow}
                    value={field.state.value}
                  />
                )
              }}
            </form.Field>
          </div>
          <div>
            <h4 className="text-base font-medium">アウトライン</h4>
          </div>
          <div>
            <form.Field name="moderatorName.outline.width">
              {(field) => {
                const moderatorNameShow =
                  form.getFieldValue('moderatorName.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      太さ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        disabled={!moderatorNameShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
          <div>
            <form.Field name="moderatorName.outline.color">
              {(field) => {
                const moderatorNameShow =
                  form.getFieldValue('moderatorName.show')
                return (
                  <ColorPicker
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    disabled={!moderatorNameShow}
                    value={field.state.value}
                  />
                )
              }}
            </form.Field>
          </div>
        </div>

        <h3 className="text-base font-normal mb-4 mt-6">メンバー</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div>
            <form.Field name="memberName.show">
              {(field) => (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!field.state.value}
                    id={field.name}
                    onChange={(e) => field.handleChange(e.target.checked)}
                    className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                  />
                  <span className="ml-2">表示する</span>
                </label>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="memberName.fontSize">
              {(field) => {
                const memberNameShow = form.getFieldValue('memberName.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      大きさ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        disabled={!memberNameShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
          <div>
            <form.Field name="memberName.color">
              {(field) => {
                const memberNameShow = form.getFieldValue('memberName.show')
                return (
                  <ColorPicker
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    disabled={!memberNameShow}
                    value={field.state.value}
                  />
                )
              }}
            </form.Field>
          </div>
          <div>
            <h4 className="text-base font-medium">アウトライン</h4>
          </div>
          <div>
            <form.Field name="memberName.outline.width">
              {(field) => {
                const memberNameShow = form.getFieldValue('memberName.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      太さ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        disabled={!memberNameShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
          <div>
            <form.Field name="memberName.outline.color">
              {(field) => {
                const memberNameShow = form.getFieldValue('memberName.show')
                return (
                  <ColorPicker
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    disabled={!memberNameShow}
                    value={field.state.value}
                  />
                )
              }}
            </form.Field>
          </div>
        </div>

        <h3 className="text-base font-normal mb-4 mt-6">一般ユーザー</h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div>
            <form.Field name="authorName.show">
              {(field) => (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!field.state.value}
                    id={field.name}
                    onChange={(e) => field.handleChange(e.target.checked)}
                    className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                  />
                  <span className="ml-2">表示する</span>
                </label>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="authorName.fontSize">
              {(field) => {
                const authorNameShow = form.getFieldValue('authorName.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      大きさ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        disabled={!authorNameShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
          <div>
            <form.Field name="authorName.color">
              {(field) => {
                const authorNameShow = form.getFieldValue('authorName.show')
                return (
                  <ColorPicker
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    disabled={!authorNameShow}
                    value={field.state.value}
                  />
                )
              }}
            </form.Field>
          </div>
          <div>
            <h4 className="text-base font-medium">アウトライン</h4>
          </div>
          <div>
            <form.Field name="authorName.outline.width">
              {(field) => {
                const authorNameShow = form.getFieldValue('authorName.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      太さ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        disabled={!authorNameShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
          <div>
            <form.Field name="authorName.outline.color">
              {(field) => {
                const authorNameShow = form.getFieldValue('authorName.show')
                return (
                  <ColorPicker
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    disabled={!authorNameShow}
                    value={field.state.value}
                  />
                )
              }}
            </form.Field>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <Headline icon={<MessageSquare className="w-6 h-6" />}>
          メッセージ
        </Headline>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div className="col-span-1"></div>
          <div>
            <form.Field name="message.fontSize">
              {(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm text-gray-600 mb-1"
                  >
                    大きさ
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id={field.name}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(Number(e.target.value))
                      }
                      onBlur={field.handleBlur}
                    />
                    <span className="absolute right-3 top-2 text-gray-500">
                      px
                    </span>
                  </div>
                </div>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="message.color">
              {(field) => (
                <ColorPicker
                  onChange={field.handleChange}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                />
              )}
            </form.Field>
          </div>
          <div>
            <h4 className="text-base font-medium">アウトライン</h4>
          </div>
          <div>
            <form.Field name="message.outline.width">
              {(field) => (
                <div>
                  <label
                    htmlFor={field.name}
                    className="block text-sm text-gray-600 mb-1"
                  >
                    太さ
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id={field.name}
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      value={field.state.value}
                      onChange={(e) =>
                        field.handleChange(Number(e.target.value))
                      }
                      onBlur={field.handleBlur}
                    />
                    <span className="absolute right-3 top-2 text-gray-500">
                      px
                    </span>
                  </div>
                </div>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="message.outline.color">
              {(field) => (
                <ColorPicker
                  onChange={field.handleChange}
                  onBlur={field.handleBlur}
                  value={field.state.value}
                />
              )}
            </form.Field>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <Headline icon={<Sticker className="w-6 h-6" />}>ステッカー</Headline>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
          <div>
            <form.Field name="sticker.show">
              {(field) => (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!field.state.value}
                    id={field.name}
                    onChange={(e) => field.handleChange(e.target.checked)}
                    className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                  />
                  <span className="ml-2">テキストを表示する</span>
                </label>
              )}
            </form.Field>
          </div>
          <div>
            <form.Field name="sticker.fontSize">
              {(field) => {
                const stickerShow = form.getFieldValue('sticker.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      大きさ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        disabled={!stickerShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
          <div>
            <form.Field name="sticker.color">
              {(field) => {
                const stickerShow = form.getFieldValue('sticker.show')
                return (
                  <ColorPicker
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    disabled={!stickerShow}
                    value={field.state.value}
                  />
                )
              }}
            </form.Field>
          </div>
          <div>
            <h4 className="text-base font-medium">アウトライン</h4>
          </div>
          <div>
            <form.Field name="sticker.outline.width">
              {(field) => {
                const stickerShow = form.getFieldValue('sticker.show')
                return (
                  <div>
                    <label
                      htmlFor={field.name}
                      className="block text-sm text-gray-600 mb-1"
                    >
                      太さ
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id={field.name}
                        disabled={!stickerShow}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        value={field.state.value}
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        onBlur={field.handleBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )
              }}
            </form.Field>
          </div>
          <div>
            <form.Field name="sticker.outline.color">
              {(field) => {
                const stickerShow = form.getFieldValue('sticker.show')
                return (
                  <ColorPicker
                    onChange={field.handleChange}
                    onBlur={field.handleBlur}
                    disabled={!stickerShow}
                    value={field.state.value}
                  />
                )
              }}
            </form.Field>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <Headline icon={<Settings className="w-6 h-6" />}>その他</Headline>

        <div className="flex flex-col gap-2">
          <form.Field name="engagementMessage.show">
            {(field) => (
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!field.state.value}
                  id={field.name}
                  onChange={(e) => field.handleChange(e.target.checked)}
                  className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                />
                <span className="ml-2">入室メッセージを表示する</span>
              </label>
            )}
          </form.Field>
          <form.Field name="superChatBackground.show">
            {(field) => (
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!field.state.value}
                  id={field.name}
                  onChange={(e) => field.handleChange(e.target.checked)}
                  className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                />
                <span className="ml-2">スーパーチャットの背景を表示する</span>
              </label>
            )}
          </form.Field>
          <form.Field name="newMemberBackground.show">
            {(field) => (
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!field.state.value}
                  id={field.name}
                  onChange={(e) => field.handleChange(e.target.checked)}
                  className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                />
                <span className="ml-2">
                  メンバー登録アナウンスの背景を表示する
                </span>
              </label>
            )}
          </form.Field>
        </div>
      </section>

      <AutoSave form={form} />
    </form>
  )
}

export default StylesForm
