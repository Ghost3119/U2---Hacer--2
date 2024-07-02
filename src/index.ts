import colors from 'colors';
import server from './server';

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(colors.green.underline.bold(`http://localhost:${PORT}`));
});