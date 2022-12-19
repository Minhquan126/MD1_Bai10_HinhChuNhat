class HinhChunhat {
    chieuDai;
    chieuCao;
    dienTich;
    chuVi;

    constructor(chieuDai, chieuCao, dienTich, chuVi) {
        this.chieuDai = chieuDai;
        this.chieuCao = chieuCao;
        this.dienTich = dienTich;
        this.chuVi = chuVi;
    }
    setDientich(chieuDai, chieuCao) {
        this.dienTich = this.chieuDai * this.chieuCao
    }
    getDientich() {
        return this.dienTich
    }
    setChuvi(chieuDai, chieuCao) {
        this.chuVi = (this.chieuDai + this.chieuCao) * 2
    }
    getChuvi() {
        return this.chuVi
    }
    drawRect(ctx) {
        ctx.beginPath()
        ctx.strokeStyle = 'red'
        ctx.rect(50, 50, this.chieuDai, this.chieuCao)
        ctx.stroke()
    }
}
function rectangle() {
    let a = +document.getElementById('chieudai').value
    let b = +document.getElementById('chieurong').value
    let c = document.getElementById('mycanvas')
    let ctx = c.getContext('2d')
    let hinh = new HinhChunhat(a, b)
    hinh.drawRect(ctx)
    hinh.setChuvi();
    hinh.setDientich()
    document.getElementById('dientich').innerHTML = hinh.getDientich()
    document.getElementById('chuvi').innerHTML = hinh.getChuvi()
}
function clearCanvas() {
    let c = document.getElementById('mycanvas')
    let ctx = c.getContext('2d')
    ctx.clearRect(0, 0, 600, 300)
}