import { Field, FieldProps, Formik } from 'formik'
import React, { FC, useCallback, useContext } from 'react'
import { UserCircle2, MessageSquare, User, Settings } from 'lucide-react'
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

  return (
    <Formik initialValues={chatStyles} onSubmit={handleSubmit}>
      <form action="/">
        <section className="mb-8">
          <Headline icon={<UserCircle2 className="w-6 h-6" />}>
            アイコン
          </Headline>

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

        <section className="mb-8">
          <Headline icon={<User className="w-6 h-6" />}>名前</Headline>

          <h3 className="text-base font-normal mb-4">オーナー</h3>

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

          <h3 className="text-base font-normal mb-4 mt-6">モデレーター</h3>

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

          <h3 className="text-base font-normal mb-4 mt-6">メンバー</h3>

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

          <h3 className="text-base font-normal mb-4 mt-6">一般ユーザー</h3>

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

        <section className="mb-8">
          <Headline icon={<MessageSquare className="w-6 h-6" />}>
            メッセージ
          </Headline>

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

        <section className="mb-8">
          <Headline icon={<Settings className="w-6 h-6" />}>その他</Headline>

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
