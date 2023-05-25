import { config }  from '../../config.js';


//=========== 전체 보기 ===========
export async function showAll(req, res){
    const page = req.query.page || 1
    const M_NAME = req.query.M_NAME
    const url = M_NAME
        ? `${config.base}/admin/medicine?page=${page}&M_NAME=${M_NAME}`
        : `${config.base}/admin/medicine?page=${page}`

    fetch(url)
    .then(response => response.json())
    .then(pharmList => {
        res.render('../public/ejs/admin/adminmedicine', {pharmList});
    });
}


//============ 약품등록 ============
export async function insertpharm(req, res){
    const {M_NUM, M_NAME, M_CORP, M_TYPE, M_SHAPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS, M_IMAGE} = req.body; // 새로 등록할 약품 정보 바디에서 가져오기
    const newpharm = {M_NUM, M_NAME, M_CORP, M_TYPE, M_SHAPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS, M_IMAGE }
    fetch(config.base+'/admin/medicine', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newpharm) // 약품 정보를 JSON 형식으로 변환
    })
    .then(response => response.json())
    .then(insertedpharm => {
        res.redirect('/admin/medicine'); 
    })
}


//=========== 약품수정 =============
export async function updatepharm(req, res){
    const { M_NUM, M_NAME, M_CORP, M_TYPE, M_SHAPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS, M_IMAGE } = req.body; // 수정할 약품 정보 바디에서 가져오기
    const updatedpharm = { M_NUM, M_NAME, M_CORP, M_TYPE, M_SHAPE, M_MARK_FRONT, M_MARK_BACK, M_COLOR_FRONT, M_COLOR_BACK, M_CHARACTER, M_AXIS_LONG, M_AXIS_SHORT, M_THICKNESS, M_IMAGE };
    
    fetch(config.base + '/admin/medicine/' + M_NUM, {
        method: 'PUT',     //서버로 보내는거라 그대로 두기
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedpharm) // 약품 정보를 JSON 형식으로 변환
    })
    .then(response => response.json())
    .then(updatedpharm => {
        res.redirect('/admin/medicine'); // 약품 수정이 성공한 경우, 약품 목록 페이지로 리다이렉트
    })
}

//==========- 약품삭제 =============
export async function deletepharm(req, res){
    const  M_NUM  = req.params.id; // 삭제할 약품의 M_NUM 파라미터에서 가져오기
    
    fetch(config.base + '/admin/medicine/' + M_NUM, {
        method: 'DELETE'
    })
    .then(() => res.redirect('/admin/medicine') // 약품 삭제가 성공한 경우, 약품 목록 페이지로 리다이렉트
    )
}
