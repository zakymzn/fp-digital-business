import NewsItem from '../components/NewsItem';

const newsItems = [
    <NewsItem
        newsImage={require('../assets/news/news1.jpg')}
        altNewsImg={'news'}
        newsTitle={'Pengembang Platform Blockchain Terkenal Mengumumkan Peningkatan Keamanan Setelah Serangan Malware'}
        newsSnippet={'Platform blockchain terkenal, ABC Chain, baru-baru ini mengumumkan langkah-langkah peningkatan keamanan menyusul serangan malware yang mengganggu layanan selama 48 jam pada minggu lalu. Insiden ini menyebabkan kerugian bagi beberapa pengguna dan mendorong perusahaan untuk memperkuat infrastruktur mereka guna melindungi data dan aset pengguna.'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news2.jpg')}
        altNewsImg={'news'}
        newsTitle={'Exchange Cryptocurrency Terbesar Menghadapi Upaya Peretasan Massal, Berhasil Deter Belasan Ribu Serangan'}
        newsSnippet={'Exchange cryptocurrency terbesar, MegaExchange, baru-baru ini menghadapi upaya peretasan massal yang mengancam platform mereka. Tim keamanan MegaExchange berhasil mencegah lebih dari 15.000 serangan yang mencoba merusak dan mengakses data pengguna serta aset digital yang disimpan di platform tersebut.'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news3.jpg')}
        altNewsImg={'news'}
        newsTitle={'Peneliti Keamanan Blockchain Mengungkapkan Kerentan-Kerentan dalam Protokol DeFi Populer'}
        newsSnippet={'Para peneliti keamanan blockchain telah mengidentifikasi serangkaian kerentanan kritis dalam salah satu protokol DeFi (Decentralized Finance) paling populer saat ini. Penemuan ini menimbulkan kekhawatiran tentang potensi risiko bagi dana pengguna dan memberikan tekanan bagi para pengembang untuk segera memperbaiki celah-celah tersebut.'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news4.png')}
        altNewsImg={'news'}
        newsTitle={'Tim Keamanan Cyber Menggagalkan Rencana Peretasan Terhadap Proyek Blockchain Inovatif'}
        newsSnippet={'Tim keamanan cyber berhasil menggagalkan upaya peretasan terhadap proyek blockchain inovatif yang sedang dalam pengembangan. Serangan tersebut, yang bertujuan mencuri data rahasia dan informasi sensitif, digagalkan tepat waktu oleh tim keamanan yang waspada, mencegah potensi kerugian besar bagi proyek tersebut.'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news5.jpg')}
        altNewsImg={'news'}
        newsTitle={'Raport Keamanan Mengungkap Rentetan Serangan Terhadap Protokol Smart Contract, Pengguna Diingatkan Untuk Tetap Waspada'}
        newsSnippet={'Sebuah raport keamanan yang baru dirilis telah mengungkapkan rentetan serangan yang menargetkan protokol smart contract dalam beberapa minggu terakhir. Penelitian ini menyoroti kerentanannya dalam beberapa protokol DeFi dan aplikasi terdesentralisasi lainnya, mengingatkan para pengguna untuk tetap waspada dan berhati-hati saat berinteraksi dengan layanan keuangan terdesentralisasi.'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news6.jpg')}
        altNewsImg={'news'}
        newsTitle={'Peretasan Ponsel Menyebabkan Kehilangan Aset Cryptocurrency Senilai Jutaan Dolar'}
        newsSnippet={'Seorang investor cryptocurrency mengalami kejadian mengerikan setelah ponselnya diretas, menyebabkan kehilangan aset digital senilai jutaan dolar. Peretasan ini menjadi peringatan nyata bagi para pemegang cryptocurrency tentang pentingnya keamanan digital dan langkah-langkah pencegahan yang diperlukan.'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news5.jpg')}
        altNewsImg={'news'}
        newsTitle={'Institusi Keuangan Mulai Menggunakan Teknologi Blockchain yang Lebih Aman untuk Transaksi Keuangan'}
        newsSnippet={'Sejumlah institusi keuangan besar telah mengumumkan langkah besar dalam mengadopsi teknologi blockchain yang lebih aman untuk memproses transaksi keuangan. Keputusan ini menandai pergeseran besar dalam industri keuangan menuju penggunaan teknologi yang lebih inovatif dan terpercaya untuk mengamankan data dan mengoptimalkan proses transaksi.'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news4.png')}
        altNewsImg={'news'}
        newsTitle={'Peneliti Menemukan Lapisan Keamanan Baru yang Revolusioner dalam Blockchain'}
        newsSnippet={'Sebuah tim peneliti keamanan blockchain telah mengumumkan penemuan lapisan keamanan baru yang dianggap revolusioner dalam teknologi blockchain. Temuan ini diharapkan akan membuka potensi baru dalam memperkuat keamanan jaringan blockchain dan melindungi data transaksi dari ancaman potensial.'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />,
    <NewsItem
        newsImage={require('../assets/news/news3.jpg')}
        altNewsImg={'news'}
        newsTitle={'Eksekutif Perusahaan Blockchain Membocorkan Data Pengguna Akibat Serangan Phishing'}
        newsSnippet={'Seorang eksekutif senior dari perusahaan blockchain terkemuka secara tidak sengaja membocorkan data pengguna setelah jatuh korban serangan phishing yang licik. Insiden ini menimbulkan keprihatinan serius tentang kerentanannya terhadap serangan siber dan perlunya penguatan keamanan data di seluruh industri blockchain.'}
        newsAuthorImage={require('../assets/news/authors/author1.jpg')}
        newsAuthorAltNewsImg={'author1'}
        newsAuthorName={'Anas Fikri Hanif'}
        newsComments={20}
        newsViews={1000}
    />
];

export default newsItems;