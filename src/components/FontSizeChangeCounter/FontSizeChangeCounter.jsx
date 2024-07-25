import CounterWithLabel from '../Counter/components/CounterWithLabel'

const FontSizeChangeCounter = ({ value, onChange, inputId }) => {
  return (
    <CounterWithLabel
      value={value}
      inputId={inputId}
      label={'Font size:'}
      onChange={(value) => onChange({ fontSize: value })}
    />
  )
}

export default FontSizeChangeCounter
