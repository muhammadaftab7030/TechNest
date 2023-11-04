const validate = (email) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (reg.test(email) === false) {
      return false;
    }
    else {
      return true;
    }
  }

export {validate}