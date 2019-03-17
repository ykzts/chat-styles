import { Cell, Grid, Row } from '@material/react-layout-grid'
import Switch from '@material/react-switch'
import TextField, { Input } from '@material/react-text-field'
import { Subtitle1, Subtitle2 } from '@material/react-typography'
import { Field, FieldProps, Form, Formik } from 'formik'
import React, {
  FunctionComponent,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useRef
} from 'react'
import ChatStylesContext, {
  ChatStyles
} from '../../../context/ChatStylesContext'
import ColorPicker from '../../atoms/ColorPicker'
import FormControl from '../../atoms/FormControl'
import Headline from '../../atoms/Headline'
import classes from './StylesForm.module.scss'

import '@material/react-layout-grid/index.scss'
import '@material/react-switch/index.scss'
import '@material/react-text-field/index.scss'
import '@material/react-typography/index.scss'

const StylesForm: FunctionComponent = (): ReactElement => {
  const formRef = useRef<Formik>(null)
  const { chatStyles, setChatStyles } = useContext(ChatStylesContext)

  const handleSubmit = useCallback(values => setChatStyles(values), [
    chatStyles
  ])

  useEffect(() => {
    const form = formRef.current

    if (!form) return

    const interval = setInterval(() => form.submitForm(), 500)

    return () => clearInterval(interval)
  }, [formRef.current])

  return (
    <Formik initialValues={chatStyles} onSubmit={handleSubmit} ref={formRef}>
      <Form>
        <section className={classes.section}>
          <Headline icon="account_circle">アイコン</Headline>

          <Grid className={classes.grid}>
            <Row>
              <Cell align="middle" columns={4}>
                <Field
                  name="avatar.show"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <FormControl htmlFor={field.name} label="表示する">
                      <Switch
                        checked={!!field.value}
                        nativeControlId={field.name}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="avatar.size"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="大きさ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input
                        {...field}
                        disabled={!form.values.avatar.show}
                        type="number"
                      />
                    </TextField>
                  )}
                />
              </Cell>
            </Row>
          </Grid>
        </section>

        <section className={classes.section}>
          <Headline icon="person">名前</Headline>

          <Subtitle1>オーナー</Subtitle1>

          <Grid className={classes.grid}>
            <Row>
              <Cell align="middle" columns={4}>
                <Field
                  name="ownerName.show"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <FormControl htmlFor={field.name} label="表示する">
                      <Switch
                        checked={!!field.value}
                        nativeControlId={field.name}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="ownerName.fontSize"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="大きさ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input
                        {...field}
                        disabled={!form.values.ownerName.show}
                        type="number"
                      />
                    </TextField>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="ownerName.color"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <ColorPicker
                      {...field}
                      disabled={!form.values.ownerName.show}
                    />
                  )}
                />
              </Cell>
            </Row>
            <Row>
              <Cell align="middle" columns={4}>
                <Subtitle2>アウトライン</Subtitle2>
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="ownerName.outline.width"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="太さ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input
                        {...field}
                        disabled={!form.values.ownerName.show}
                        type="number"
                      />
                    </TextField>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="ownerName.outline.color"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <ColorPicker
                      {...field}
                      disabled={!form.values.ownerName.show}
                    />
                  )}
                />
              </Cell>
            </Row>
          </Grid>

          <Subtitle1>モデレーター</Subtitle1>

          <Grid className={classes.grid}>
            <Row>
              <Cell align="middle" columns={4}>
                <Field
                  name="moderatorName.show"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <FormControl htmlFor={field.name} label="表示する">
                      <Switch
                        checked={!!field.value}
                        nativeControlId={field.name}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="moderatorName.fontSize"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="大きさ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input
                        {...field}
                        disabled={!form.values.moderatorName.show}
                        type="number"
                      />
                    </TextField>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="moderatorName.color"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <ColorPicker
                      {...field}
                      disabled={!form.values.moderatorName.show}
                    />
                  )}
                />
              </Cell>
            </Row>
            <Row>
              <Cell align="middle" columns={4}>
                <Subtitle2>アウトライン</Subtitle2>
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="moderatorName.outline.width"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="太さ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input
                        {...field}
                        disabled={!form.values.moderatorName.show}
                        type="number"
                      />
                    </TextField>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="moderatorName.outline.color"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <ColorPicker
                      {...field}
                      disabled={!form.values.moderatorName.show}
                    />
                  )}
                />
              </Cell>
            </Row>
          </Grid>

          <Subtitle1>メンバー</Subtitle1>

          <Grid className={classes.grid}>
            <Row>
              <Cell align="middle" columns={4}>
                <Field
                  name="memberName.show"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <FormControl htmlFor={field.name} label="表示する">
                      <Switch
                        checked={!!field.value}
                        nativeControlId={field.name}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="memberName.fontSize"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="大きさ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input
                        {...field}
                        disabled={!form.values.memberName.show}
                        type="number"
                      />
                    </TextField>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="memberName.color"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <ColorPicker
                      {...field}
                      disabled={!form.values.memberName.show}
                    />
                  )}
                />
              </Cell>
            </Row>
            <Row>
              <Cell align="middle" columns={4}>
                <Subtitle2>アウトライン</Subtitle2>
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="memberName.outline.width"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="太さ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input
                        {...field}
                        disabled={!form.values.memberName.show}
                        type="number"
                      />
                    </TextField>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="memberName.outline.color"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <ColorPicker
                      {...field}
                      disabled={!form.values.memberName.show}
                    />
                  )}
                />
              </Cell>
            </Row>
          </Grid>

          <Subtitle1>一般ユーザー</Subtitle1>

          <Grid className={classes.grid}>
            <Row>
              <Cell align="middle" columns={4}>
                <Field
                  name="authorName.show"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <FormControl htmlFor={field.name} label="表示する">
                      <Switch
                        checked={!!field.value}
                        nativeControlId={field.name}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="authorName.fontSize"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="大きさ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input
                        {...field}
                        disabled={!form.values.authorName.show}
                        type="number"
                      />
                    </TextField>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="authorName.color"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <ColorPicker
                      {...field}
                      disabled={!form.values.authorName.show}
                    />
                  )}
                />
              </Cell>
            </Row>
            <Row>
              <Cell align="middle" columns={4}>
                <Subtitle2>アウトライン</Subtitle2>
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="authorName.outline.width"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="太さ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input
                        {...field}
                        disabled={!form.values.authorName.show}
                        type="number"
                      />
                    </TextField>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="authorName.outline.color"
                  render={({ field, form }: FieldProps<ChatStyles>) => (
                    <ColorPicker
                      {...field}
                      disabled={!form.values.authorName.show}
                    />
                  )}
                />
              </Cell>
            </Row>
          </Grid>
        </section>

        <section className={classes.section}>
          <Headline icon="chat">メッセージ</Headline>

          <Grid className={classes.grid}>
            <Row>
              <Cell align="middle" columns={4} />
              <Cell align="middle" columns={4}>
                <Field
                  name="message.fontSize"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="大きさ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input {...field} type="number" />
                    </TextField>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="message.color"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <ColorPicker {...field} />
                  )}
                />
              </Cell>
            </Row>
            <Row>
              <Cell align="middle" columns={4}>
                <Subtitle2>アウトライン</Subtitle2>
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="message.outline.width"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <TextField
                      label="太さ"
                      outlined
                      trailingIcon={<span>px</span>}
                    >
                      <Input {...field} type="number" />
                    </TextField>
                  )}
                />
              </Cell>
              <Cell align="middle" columns={4}>
                <Field
                  name="message.outline.color"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <ColorPicker {...field} />
                  )}
                />
              </Cell>
            </Row>
          </Grid>
        </section>

        <section className={classes.section}>
          <Headline icon="settings">その他</Headline>

          <Grid className={classes.grid}>
            <Row>
              <Cell align="middle" columns={12}>
                <Field
                  name="engagementMessage.show"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <FormControl
                      htmlFor={field.name}
                      label="入室メッセージを表示する"
                    >
                      <Switch
                        checked={!!field.value}
                        nativeControlId={field.name}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
              </Cell>
            </Row>
            <Row>
              <Cell align="middle" columns={12}>
                <Field
                  name="superChatBackground.show"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <FormControl
                      htmlFor={field.name}
                      label="スーパーチャットの背景を表示する"
                    >
                      <Switch
                        checked={!!field.value}
                        nativeControlId={field.name}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
              </Cell>
            </Row>
            <Row>
              <Cell align="middle" columns={12}>
                <Field
                  name="newMemberBackground.show"
                  render={({ field }: FieldProps<ChatStyles>) => (
                    <FormControl
                      htmlFor={field.name}
                      label="メンバー登録アナウンスの背景を表示する"
                    >
                      <Switch
                        checked={!!field.value}
                        nativeControlId={field.name}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  )}
                />
              </Cell>
            </Row>
          </Grid>
        </section>
      </Form>
    </Formik>
  )
}

export default StylesForm
