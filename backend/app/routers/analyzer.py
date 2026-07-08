from fastapi import APIRouter, HTTPException

from app.schemas.analyzer_schema import TextRequest
from app.schemas.response_schemas import APIResponse
from app.services.text_service import analyze_text

router = APIRouter(
    prefix="/analyzer",
    tags=["Text Analyzer"]
)


@router.post("/", response_model=APIResponse)
def analyzer(request: TextRequest):

    try:
        result = analyze_text(request.text)

        return APIResponse(
            success=True,
            message="Text analyzed successfully.",
            data=result
        )

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )