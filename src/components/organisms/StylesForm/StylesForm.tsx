import { Field, FieldProps, Formik } from 'formik'
import React, { FC, useCallback, useContext } from 'react'
import ChatStylesContext from 'context/ChatStylesContext'
import AutoSave from 'components/atoms/AutoSave'
import ColorPicker from 'components/atoms/ColorPicker'
import Headline from 'components/atoms/Headline'
import ChatStyles from 'types/ChatStyles'

const AccountCircleIcon: FC = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
  </svg>
)

const ChatIcon: FC = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
  </svg>
)

const PersonIcon: FC = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
)

const SettingsIcon: FC = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
)

const StylesForm: FC = () => {
  const { chatStyles, setChatStyles } = useContext(ChatStylesContext)

  const handleSubmit = useCallback(
    (values: ChatStyles) => {
      if (typeof setChatStyles === 'function') setChatStyles(values)
    },
    [setChatStyles]
  )

  return (
    <Formik initialValues={chatStyles} onSubmit={handleSubmit}>
      <form action="/">
        <section>
          <Headline icon={<AccountCircleIcon />}>アイコン</Headline>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div>
              <Field name="avatar.show">
                {({ field }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                      className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                    />
                    <span className="ml-2">表示する</span>
                  </label>
                )}
              </Field>
            </div>
            <div>
              <Field name="avatar.size">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        name={field.name}
                        id={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        disabled={!form.values.avatar.show}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
          </div>
        </section>

        <section>
          <Headline icon={<PersonIcon />}>名前</Headline>

          <h3 className="text-lg font-medium mb-4">オーナー</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div>
              <Field name="ownerName.show">
                {({ field }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                      className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                    />
                    <span className="ml-2">表示する</span>
                  </label>
                )}
              </Field>
            </div>
            <div>
              <Field name="ownerName.fontSize">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        name={field.name}
                        id={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        disabled={!form.values.ownerName.show}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="ownerName.color">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.ownerName.show}
                    value={form.values.ownerName.color}
                  />
                )}
              </Field>
            </div>
            <div>
              <h4 className="text-base font-medium">アウトライン</h4>
            </div>
            <div>
              <Field name="ownerName.outline.width">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        disabled={!form.values.ownerName.show}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        name={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="ownerName.outline.color">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.ownerName.show}
                    value={form.values.ownerName.outline.color}
                  />
                )}
              </Field>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4 mt-6">モデレーター</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div>
              <Field name="moderatorName.show">
                {({ field }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                      className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                    />
                    <span className="ml-2">表示する</span>
                  </label>
                )}
              </Field>
            </div>
            <div>
              <Field name="moderatorName.fontSize">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        disabled={!form.values.moderatorName.show}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        name={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="moderatorName.color">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.moderatorName.show}
                    value={form.values.moderatorName.color}
                  />
                )}
              </Field>
            </div>
            <div>
              <h4 className="text-base font-medium">アウトライン</h4>
            </div>
            <div>
              <Field name="moderatorName.outline.width">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        disabled={!form.values.moderatorName.show}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        name={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="moderatorName.outline.color">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.moderatorName.show}
                    value={form.values.moderatorName.outline.color}
                  />
                )}
              </Field>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4 mt-6">メンバー</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div>
              <Field name="memberName.show">
                {({ field }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                      className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                    />
                    <span className="ml-2">表示する</span>
                  </label>
                )}
              </Field>
            </div>
            <div>
              <Field name="memberName.fontSize">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        disabled={!form.values.memberName.show}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        name={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="memberName.color">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.memberName.show}
                    value={form.values.memberName.color}
                  />
                )}
              </Field>
            </div>
            <div>
              <h4 className="text-base font-medium">アウトライン</h4>
            </div>
            <div>
              <Field name="memberName.outline.width">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        disabled={!form.values.memberName.show}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        name={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="memberName.outline.color">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.memberName.show}
                    value={form.values.memberName.outline.color}
                  />
                )}
              </Field>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4 mt-6">一般ユーザー</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div>
              <Field name="authorName.show">
                {({ field }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                      className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                    />
                    <span className="ml-2">表示する</span>
                  </label>
                )}
              </Field>
            </div>
            <div>
              <Field name="authorName.fontSize">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        disabled={!form.values.authorName.show}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        name={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="authorName.color">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.authorName.show}
                    value={form.values.authorName.color}
                  />
                )}
              </Field>
            </div>
            <div>
              <h4 className="text-base font-medium">アウトライン</h4>
            </div>
            <div>
              <Field name="authorName.outline.width">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        disabled={!form.values.authorName.show}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        name={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="authorName.outline.color">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.authorName.show}
                    value={form.values.authorName.outline.color}
                  />
                )}
              </Field>
            </div>
          </div>
        </section>

        <section>
          <Headline icon={<ChatIcon />}>メッセージ</Headline>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            <div className="col-span-1"></div>
            <div>
              <Field name="message.fontSize">
                {({ field }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        name={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="message.color">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <ColorPicker {...field} value={form.values.message.color} />
                )}
              </Field>
            </div>
            <div>
              <h4 className="text-base font-medium">アウトライン</h4>
            </div>
            <div>
              <Field name="message.outline.width">
                {({ field }: FieldProps<ChatStyles>): React.JSX.Element => (
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
                        name={field.name}
                        value={field.value as unknown as number | string}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      <span className="absolute right-3 top-2 text-gray-500">
                        px
                      </span>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="message.outline.color">
                {({
                  field,
                  form
                }: FieldProps<ChatStyles>): React.JSX.Element => (
                  <ColorPicker
                    {...field}
                    value={form.values.message.outline.color}
                  />
                )}
              </Field>
            </div>
          </div>
        </section>

        <section>
          <Headline icon={<SettingsIcon />}>その他</Headline>

          <div className="flex flex-col gap-2">
            <Field name="engagementMessage.show">
              {({ field }: FieldProps<ChatStyles>): React.JSX.Element => (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!field.value}
                    id={field.name}
                    onChange={field.onChange}
                    className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                  />
                  <span className="ml-2">入室メッセージを表示する</span>
                </label>
              )}
            </Field>
            <Field name="superChatBackground.show">
              {({ field }: FieldProps<ChatStyles>): React.JSX.Element => (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!field.value}
                    id={field.name}
                    onChange={field.onChange}
                    className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                  />
                  <span className="ml-2">スーパーチャットの背景を表示する</span>
                </label>
              )}
            </Field>
            <Field name="newMemberBackground.show">
              {({ field }: FieldProps<ChatStyles>): React.JSX.Element => (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!field.value}
                    id={field.name}
                    onChange={field.onChange}
                    className="w-10 h-6 bg-gray-300 rounded-full appearance-none cursor-pointer relative before:absolute before:w-5 before:h-5 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform checked:bg-blue-600 checked:before:translate-x-4"
                  />
                  <span className="ml-2">
                    メンバー登録アナウンスの背景を表示する
                  </span>
                </label>
              )}
            </Field>
          </div>
        </section>

        <AutoSave />
      </form>
    </Formik>
  )
}

export default StylesForm
