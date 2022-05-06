import s from './partner-modal.module.scss'

const partnerModal = () => {
    return (
        <div className={s.partnerContent}>
            <img src="/img/handshake.png" alt=""/>
            <h2 className={s.partnerContentTitle}>
                For partners
            </h2>
            <p>
                Yassport combines the latest developments in technology with sports by digitizing physical medals into
                electronic form and converting them into non-fungible tokens.
            </p>
            <p>Yassport can be your partner in providing race participants with digital NFT medals, organizing and
                eternalizing their achievements.</p>
            <p>Please leave a request by mail <a href="mailto:support@yassport.org">support@yassport.org</a> if you have interest.</p>

        </div>
    )
}
export default partnerModal

