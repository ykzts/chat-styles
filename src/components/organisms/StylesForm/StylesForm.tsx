import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ChatIcon from '@material-ui/icons/Chat'
import PersonIcon from '@material-ui/icons/Person'
import SettingsIcon from '@material-ui/icons/Settings'
import createStyles from '@material-ui/styles/createStyles'
import { Field, FieldProps, Form, Formik } from 'formik'
import React, {
  FC,
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
import Headline from '../../atoms/Headline'

const useStyles = makeStyles(theme =>
  createStyles({
    section: {}
  })
)

const StylesForm: FC = (): ReactElement => {
  const formRef = useRef<Formik>(null)
  const { chatStyles, setChatStyles } = useContext(ChatStylesContext)
  const classes = useStyles()

  const handleSubmit = useCallback(values => setChatStyles(values), [
    setChatStyles
  ])

  useEffect(() => {
    const form = formRef.current

    if (!form) return

    const interval = setInterval(() => form.submitForm(), 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <Formik initialValues={chatStyles} onSubmit={handleSubmit} ref={formRef}>
      <Form>
        <section className={classes.section}>
          <Headline icon={<AccountCircleIcon />}>アイコン</Headline>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field
                name="avatar.show"
                render={({ field }: FieldProps<ChatStyles>) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="表示する"
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="avatar.size"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.avatar.show}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
        </section>

        <section className={classes.section}>
          <Headline icon={<PersonIcon />}>名前</Headline>

          <Typography component="h3" gutterBottom variant="subtitle1">
            オーナー
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field
                name="ownerName.show"
                render={({ field }: FieldProps<ChatStyles>) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="表示する"
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="ownerName.fontSize"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.ownerName.show}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="ownerName.color"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.ownerName.show}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="ownerName.outline.width"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.ownerName.show}
                    label="太さ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="ownerName.outline.color"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.ownerName.show}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            モデレーター
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field
                name="moderatorName.show"
                render={({ field }: FieldProps<ChatStyles>) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="表示する"
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="moderatorName.fontSize"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.moderatorName.show}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="moderatorName.color"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.moderatorName.show}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="moderatorName.outline.width"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.moderatorName.show}
                    label="太さ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="moderatorName.outline.color"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.moderatorName.show}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            メンバー
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field
                name="memberName.show"
                render={({ field }: FieldProps<ChatStyles>) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="表示する"
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="memberName.fontSize"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.memberName.show}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="memberName.color"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.memberName.show}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              {' '}
              <Field
                name="memberName.outline.width"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.memberName.show}
                    label="太さ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="memberName.outline.color"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.memberName.show}
                  />
                )}
              />
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            一般ユーザー
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field
                name="authorName.show"
                render={({ field }: FieldProps<ChatStyles>) => (
                  <FormControlLabel
                    control={
                      <Switch
                        checked={!!field.value}
                        id={field.name}
                        onChange={field.onChange}
                      />
                    }
                    label="表示する"
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="authorName.fontSize"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.authorName.show}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="authorName.color"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.authorName.show}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="authorName.outline.width"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    disabled={!form.values.authorName.show}
                    label="太さ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="authorName.outline.color"
                render={({ field, form }: FieldProps<ChatStyles>) => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.authorName.show}
                  />
                )}
              />
            </Grid>
          </Grid>
        </section>

        <section className={classes.section}>
          <Headline icon={<ChatIcon />}>メッセージ</Headline>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}></Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="message.fontSize"
                render={({ field }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    label="大きさ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="message.color"
                render={({ field }: FieldProps<ChatStyles>) => (
                  <ColorPicker {...field} />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="message.outline.width"
                render={({ field }: FieldProps<ChatStyles>) => (
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">px</InputAdornment>
                      )
                    }}
                    label="太さ"
                    margin="normal"
                    type="number"
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field
                name="message.outline.color"
                render={({ field }: FieldProps<ChatStyles>) => (
                  <ColorPicker {...field} />
                )}
              />
            </Grid>
          </Grid>
        </section>

        <section className={classes.section}>
          <Headline icon={<SettingsIcon />}>その他</Headline>

          <FormGroup>
            <Field
              name="engagementMessage.show"
              render={({ field }: FieldProps<ChatStyles>) => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                    />
                  }
                  label="入室メッセージを表示する"
                />
              )}
            />
            <Field
              name="superChatBackground.show"
              render={({ field }: FieldProps<ChatStyles>) => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                    />
                  }
                  label="スーパーチャットの背景を表示する"
                />
              )}
            />
            <Field
              name="newMemberBackground.show"
              render={({ field }: FieldProps<ChatStyles>) => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={!!field.value}
                      id={field.name}
                      onChange={field.onChange}
                    />
                  }
                  htmlFor={field.name}
                  label="メンバー登録アナウンスの背景を表示する"
                />
              )}
            />
          </FormGroup>
        </section>
      </Form>
    </Formik>
  )
}

export default StylesForm
