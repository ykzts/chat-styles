import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ChatIcon from '@material-ui/icons/Chat'
import PersonIcon from '@material-ui/icons/Person'
import SettingsIcon from '@material-ui/icons/Settings'
import { Field, FieldProps, Formik } from 'formik'
import React, { FC, useCallback, useContext } from 'react'
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
        <section>
          <Headline icon={<AccountCircleIcon />}>アイコン</Headline>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="avatar.show">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="avatar.size">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
          </Grid>
        </section>

        <section>
          <Headline icon={<PersonIcon />}>名前</Headline>

          <Typography component="h3" gutterBottom variant="subtitle1">
            オーナー
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.show">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.fontSize">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.ownerName.show}
                    value={form.values.ownerName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.outline.width">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="ownerName.outline.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.ownerName.show}
                    value={form.values.ownerName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            モデレーター
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.show">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.fontSize">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.moderatorName.show}
                    value={form.values.moderatorName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.outline.width">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="moderatorName.outline.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.moderatorName.show}
                    value={form.values.moderatorName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            メンバー
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.show">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.fontSize">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.memberName.show}
                    value={form.values.memberName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              {' '}
              <Field name="memberName.outline.width">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="memberName.outline.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.memberName.show}
                    value={form.values.memberName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>

          <Typography component="h3" gutterBottom variant="subtitle1">
            一般ユーザー
          </Typography>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.show">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.fontSize">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.authorName.show}
                    value={form.values.authorName.color}
                  />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.outline.width">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="authorName.outline.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    disabled={!form.values.authorName.show}
                    value={form.values.authorName.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
        </section>

        <section>
          <Headline icon={<ChatIcon />}>メッセージ</Headline>

          <Grid alignItems="center" container>
            <Grid item sm={4} xs={12}></Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.fontSize">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker {...field} value={form.values.message.color} />
                )}
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Typography component="h4" gutterBottom variant="subtitle2">
                アウトライン
              </Typography>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.outline.width">
                {({ field }: FieldProps<ChatStyles>): JSX.Element => (
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
              </Field>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Field name="message.outline.color">
                {({ field, form }: FieldProps<ChatStyles>): JSX.Element => (
                  <ColorPicker
                    {...field}
                    value={form.values.message.outline.color}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
        </section>

        <section>
          <Headline icon={<SettingsIcon />}>その他</Headline>

          <FormGroup>
            <Field name="engagementMessage.show">
              {({ field }: FieldProps<ChatStyles>): JSX.Element => (
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
            </Field>
            <Field name="superChatBackground.show">
              {({ field }: FieldProps<ChatStyles>): JSX.Element => (
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
            </Field>
            <Field name="newMemberBackground.show">
              {({ field }: FieldProps<ChatStyles>): JSX.Element => (
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
            </Field>
          </FormGroup>
        </section>

        <AutoSave />
      </form>
    </Formik>
  )
}

export default StylesForm
