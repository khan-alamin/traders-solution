package com.prologiccreations.traderssolution.controller.data;

import com.prologiccreations.traderssolution.controller.super_classes.CrudController;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.data.Attachment;
import com.prologiccreations.traderssolution.service.super_classes.data.AttachmentService;
import com.prologiccreations.traderssolution.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("attachment/")
public class AttachmentController implements CrudController<Attachment, Long> {
    private final AttachmentService AttachmentService;

    @Override
    public ResponseEntity<Response> storeData(Attachment data) {
        Response response = AttachmentService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<Attachment>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<Attachment>> response = AttachmentService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Attachment>> getOne(Long id) {
        Response<Attachment> response = AttachmentService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = AttachmentService.delete(id);
        return ResponseEntity.ok(response);
    }
}
