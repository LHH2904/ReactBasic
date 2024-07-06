import moment  from 'moment';
export const DateDisplay = (props) => {
    const {date} = props;
    return (
        <section className='mt-[3rem] text-[2rem] font-[400]'>
            My date in : {moment(date).format('LL')}
        </section>
    )
}
