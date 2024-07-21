import LeftOverflowScrollLayout from '../../../../components/Layouts/LeftOverflowScrollLayout'
import AddPageButton from './AddPageButton'
import Pages from './Pages'

const PagesAndAddPages = () => {
  return <LeftOverflowScrollLayout left={<Pages />} right={<AddPageButton />} />
}

export default PagesAndAddPages
