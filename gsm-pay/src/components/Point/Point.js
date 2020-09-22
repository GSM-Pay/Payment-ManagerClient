import React from 'react'
import { Button, Header, Form, Input, Modal, Grid } from 'semantic-ui-react'

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>충전</Button>}
    >
      <Modal.Header>포인트 충전</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header size='medium' textAlign='center'>
            <Form>
              <Form.Field inline>
                <label>금액</label>
                <Input placeholder='금액 입력' />
                <label style={{ marginLeft: '10px' }} >원</label>
              </Form.Field>
            </Form>
          </Header>

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          취소
        </Button>
        <Button
          content="충전하기"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
