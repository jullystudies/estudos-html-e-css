const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-18", '01-20', '01-21', '01-22', '01-3'],
  takePills: ['01-02'],
  journal: ['01-19']
}

nlwSetup.setData(data)
nlwSetup.load()
