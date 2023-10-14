package com.prologiccreations.traderssolution.controller.data;

import com.prologiccreations.traderssolution.controller.super_classes.CrudController;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.data.Notifications;
import com.prologiccreations.traderssolution.service.super_classes.data.NotificationsService;
import com.prologiccreations.traderssolution.utils.PageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("notifications/")
public class NotificationsController implements CrudController<Notifications, Long> {
    private final NotificationsService NotificationsService;

    @Override
    public ResponseEntity<Response> storeData(Notifications data) {
        Response response = NotificationsService.storeData(data);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Page<Notifications>>> getAll(Integer pageNumber, Integer pageSize, String sortDirection, String sortColumns) {
        Pageable pageable = PageUtil.getPageable(pageNumber, pageSize, sortDirection, sortColumns);
        Response<Page<Notifications>> response = NotificationsService.getAll(pageable);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response<Notifications>> getOne(Long id) {
        Response<Notifications> response = NotificationsService.getById(id);
        return ResponseEntity.ok(response);
    }

    @Override
    public ResponseEntity<Response> delete(Long id) {
        Response response = NotificationsService.delete(id);
        return ResponseEntity.ok(response);
    }
}
