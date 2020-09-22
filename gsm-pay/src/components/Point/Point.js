import React from 'react'
import { Button, Header, Form, Input, Modal } from 'semantic-ui-react'

import { gql, useMutation } from '@apollo/client'

const ADD_AMOUNT = gql`
  mutation AddAmount($pid: Int!, $amount: Int!) {
    addAmount(pid: $pid, amount: $amount) {
      pid
      amount
    }
  }
`;

function ModalExampleModal(props) {
  let amount;
  const [addAmount] = useMutation(ADD_AMOUNT);

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
                <Input placeholder='금액 입력' onChange={e => amount = e.target.value}/>
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
          onClick={() => {
            console.dir(amount)
            addAmount({
              variables: {
                pid: props.user.pid,
                amount: parseInt(amount),
              }
            }).then(result => {
              setOpen(false)
            }).catch(err => {
              console.log(err)
            })
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
