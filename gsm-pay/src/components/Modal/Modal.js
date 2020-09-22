import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

const ReModal = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const { open, size } = state

  return (
    <>
      <Button onClick={() => dispatch({ type: 'open', size: 'mini' })}>
        환불
      </Button>

      <Modal
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
        <Modal.Header>상세 내역</Modal.Header>
        <Modal.Content>
          <Header size='medium' textAlign='center'>금액 : 3000 원</Header>
          <Header size='medium' textAlign='center'>학생 : 최호승</Header>
          <Header size='medium' textAlign='center'>시간 : 10시 44분</Header>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => dispatch({ type: 'close' })}>
            취소
          </Button>
          <Button positive onClick={() => dispatch({ type: 'close' })}>
            환불
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default ReModal