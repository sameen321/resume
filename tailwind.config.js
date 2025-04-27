tailwind.config ={
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto':'repeat(auto-fit, minmax(200px, 1fr))'
            },
            animation:{
                spin_slow: 'spin 6s linear infinite'
            },
            colors:{
                lighthover:'#fcf4ff',
                darkhover: '#2a004a',
                darkTheme: '#110015'
            }
        }
    },
       darkMode: "selector",
}