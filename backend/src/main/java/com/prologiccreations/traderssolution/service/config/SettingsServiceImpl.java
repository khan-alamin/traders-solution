package com.prologiccreations.traderssolution.service.config;

import com.prologiccreations.traderssolution.dao.config.SettingsRepository;
import com.prologiccreations.traderssolution.dto.Response;
import com.prologiccreations.traderssolution.model.config.Settings;
import com.prologiccreations.traderssolution.service.super_classes.config.SettingsService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import static com.prologiccreations.traderssolution.TradersSolutionApplication.getCurrentUsername;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.FAILURE;
import static com.prologiccreations.traderssolution.constants.enums.OperationStatus.SUCCESS;

@Service
@RequiredArgsConstructor
public class SettingsServiceImpl implements SettingsService {

    private final SettingsRepository settingsRepository;

    @Override
    public Response storeData(Settings data) {
        String validationMsg = validate(data);
        if (validationMsg == null) {
            settingsRepository.save(data);
            return new Response(SUCCESS, "Successfully stored data", null);
        } else {
            return new Response(FAILURE, validationMsg, null);
        }
    }

    @Override
    public Response<Page<Settings>> getAll(Pageable pageable) {
        Page<Settings> page = settingsRepository.findByActive(true, pageable);
        return new Response<>(SUCCESS, null, page);
    }

    @Override
    public Response<Settings> getById(Long id) {
        Settings Settings = settingsRepository.findById(id).orElse(new Settings());
        return new Response<>(SUCCESS, null, Settings);
    }

    @Override
    public Response delete(Long id) {
        settingsRepository.softDeleteById(id, getCurrentUsername(), LocalDateTime.now());
        return new Response(SUCCESS, "Deleted successfully", null);
    }

    @Override
    public String validate(Settings data) {
        return checkDuplicate(data);
    }

    @Override
    public String checkDuplicate(Settings data) {
//        boolean SettingsnameExists;
//        if (data.hasId()) {
//            SettingsnameExists = SettingsRepository.existsBySettingsname(data.getSettingsname(), data.getId());
//        } else {
//            SettingsnameExists = SettingsRepository.existsBySettingsname(data.getSettingsname());
//        }
//        return SettingsnameExists ? "Failed to register. Settings already exists" : null;
        return null;
    }

}
