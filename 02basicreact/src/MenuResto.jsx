import "./MenuResto.css"

function MenuResto(){

    const menu = [

        {nama: 'nasi bebek', harga:'Rp. 20.000'},
        {nama: 'mie ayam', harga:'Rp. 12.000'},
        {nama: 'nasi goreng', harga:'Rp. 15.000'}
    ]

    return(

        <>

            {
               menu.map((item, index) => {

                    return(
                        <div className="menu-item" key={index}> 

                            <div><b>Nama Menu:</b><em> {item.nama}</em></div>
                            <div><b>Harga:</b><em> {item.harga}</em></div>
                
                        </div>
                    )
                })
            }
        </>
        
    )
}

export default MenuResto