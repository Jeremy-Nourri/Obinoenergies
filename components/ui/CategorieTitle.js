import PropTypes from 'prop-types';
import { Open_Sans } from 'next/font/google'

const open = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open',
})


export default function CategorieTittle({ text }) {
  return (
    <h2 className="text-xl text-center text-white font-bold bg-blue rounded-md mt-6 mb-2 py-4">
      {text}
    </h2>
  );
}

CategorieTittle.propTypes = {
  text: PropTypes.string.isRequired,
};
