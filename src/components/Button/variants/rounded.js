const sizes = {
  s: '32px',
  m: '42px',
  l: '52px'
};

const roundedVariant = ({ rounded, size }) => ({
  borderRadius: rounded && sizes[size]
});

export default roundedVariant;
